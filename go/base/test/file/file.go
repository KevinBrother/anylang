// @Author htfeng 2023/2/23 2:15 PM:00
package file

import (
	"archive/zip"
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"path"
	"path/filepath"

	"github.com/pkg/errors"
)

func IsFileExists(path string) bool {
	_, err := os.Stat(path)
	if err == nil {
		return true
	} else {
		fmt.Errorf("stat path %s error:%s", path, err)
	}

	if os.IsNotExist(err) {
		return false
	}

	return true
}

// 判断所给路径是否为文件夹
func IsDir(path string) bool {
	s, err := os.Stat(path)
	if err != nil {
		return false
	}
	return s.IsDir()
}

// 判断所给路径是否为文件
func IsFile(path string) bool {
	s, err := os.Stat(path)
	if err != nil {
		return false
	}
	return !s.IsDir()
}

// 创建文件夹
func CreateDir(path string) error {
	err := os.Mkdir(path, os.ModePerm)
	if err != nil {
		fmt.Errorf("create dir error:", err)
	}
	return err
}

func IsFileExistsWithoutLog(path string) bool {
	_, err := os.Stat(path)
	if err == nil {
		return true
	}
	if os.IsNotExist(err) {
		return false
	}
	return true
}

func GetFileMD5(filePath string) (string, error) {
	if !IsFileExists(filePath) {
		return "", errors.New(fmt.Sprintf("Query MD5 failed, file %s not exist,", filePath))
	}
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		return "", err
	}

	fileMD5 := md5.New()
	fileMD5.Write(data)
	return hex.EncodeToString(fileMD5.Sum(nil)), nil
}

func DownloadFiles(saveDir string, urls []string) (fullFilenames []string, err error) {
	_, err = os.Stat(saveDir)
	if os.IsNotExist(err) {
		errDir := os.MkdirAll(saveDir, 0755)
		if errDir != nil {
			return nil, errDir
		}
	}
	type item struct {
		fullFilename string
		err          error
	}
	ch := make(chan item, len(urls))
	for _, f := range urls {
		go func(f string) {
			var it item
			it.fullFilename, it.err = DownloadFile(saveDir, f)
			ch <- it
		}(f)
	}

	for range urls {
		it := <-ch
		if it.err != nil {
			return nil, err
		}
		fullFilenames = append(fullFilenames, it.fullFilename)
	}

	return fullFilenames, nil
}

func DownloadFile(saveDir string, url string) (string, error) {
	// Query the data
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer func() {
		if err := resp.Body.Close(); err != nil {
			fmt.Errorf(err.Error())
		}
	}()

	filename := path.Base(url)
	fullFilename := filepath.Join(saveDir, filename)
	// Create the file
	out, err := os.Create(fullFilename)
	if err != nil {
		return "", err
	}
	defer func() {
		if err := out.Close(); err != nil {
			fmt.Errorf(err.Error())
		}
	}()

	// Write the body to file
	_, err = io.Copy(out, resp.Body)
	return fullFilename, err
}

// Compress 压缩文件
// files 文件数组，可以是不同dir下的文件或者文件夹
// dest 压缩文件存放地址
func Compress(files []*os.File, dest string) error {
	d, _ := os.Create(dest)
	defer d.Close()
	w := zip.NewWriter(d)
	defer w.Close()
	for _, file := range files {
		err := compress(file, "", w)
		if err != nil {
			return err
		}
	}
	return nil
}

func compress(file *os.File, prefix string, zw *zip.Writer) error {
	info, err := file.Stat()
	if err != nil {
		return err
	}
	if info.IsDir() {
		if prefix != "" {
			prefix = prefix + "/" + info.Name()
		} else {
			prefix = info.Name()
		}
		fileInfos, err := file.Readdir(-1)
		if err != nil {
			return err
		}
		for _, fi := range fileInfos {
			f, err := os.Open(file.Name() + "/" + fi.Name())
			if err != nil {
				return err
			}
			err = compress(f, prefix, zw)
			if err != nil {
				return err
			}
		}
	} else {
		header, err := zip.FileInfoHeader(info)
		if err != nil {
			return err
		}
		if prefix != "" {
			header.Name = prefix + "/" + header.Name
		}
		writer, err := zw.CreateHeader(header)
		if err != nil {
			return err
		}
		_, err = io.Copy(writer, file)
		file.Close()
		if err != nil {
			return err
		}
	}
	return nil
}

func GetAllFile(pathname string, s []string) ([]string, error) {
	rd, err := ioutil.ReadDir(pathname)
	if err != nil {
		return s, err
	}
	for _, fi := range rd {
		if fi.IsDir() {
			fullDir := pathname + "/" + fi.Name()
			s, err = GetAllFile(fullDir, s)
			if err != nil {
				return s, err
			}
		} else {
			fullName := pathname + "/" + fi.Name()
			s = append(s, fullName)
		}
	}
	return s, nil
}

// 复制文件
func CopyFile(source, destination string) error {
	sourceFile, err := os.Open(source)
	if err != nil {
		return err
	}
	defer sourceFile.Close()

	err = os.MkdirAll(filepath.Dir(destination), os.ModePerm)
	if err != nil {
		return err
	}

	destFile, err := os.Create(destination)
	if err != nil {
		return err
	}
	defer destFile.Close()

	_, err = io.Copy(destFile, sourceFile)
	if err != nil {
		return err
	}

	return nil
}

// 复制文件夹
func CopyDir(source, destination string) error {
	fileInfo, err := os.Stat(source)
	if err != nil {
		return err
	}

	err = os.MkdirAll(destination, fileInfo.Mode())
	if err != nil {
		return err
	}

	entries, err := ioutil.ReadDir(source)
	if err != nil {
		return err
	}

	for _, entry := range entries {
		sourcePath := filepath.Join(source, entry.Name())
		destPath := filepath.Join(destination, entry.Name())

		if entry.IsDir() {
			err = CopyDir(sourcePath, destPath)
			if err != nil {
				fmt.Println(err)
			}
		} else {
			err = CopyFile(sourcePath, destPath)
			if err != nil {
				fmt.Println(err)
			}
		}
	}

	return nil
}

// 判断文件是否存在
func FileExists(filename string) bool {
	_, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return true
}

// 判断文件夹是否存在
func DirExists(dirname string) bool {
	info, err := os.Stat(dirname)
	if os.IsNotExist(err) {
		return false
	}
	return info.IsDir()
}

func GetRpaAppFilePath() string {
	path := os.Getenv("FILE_PATH")
	if path != "" {
		return path
	}
	return "."
}

// ZipDir 压缩文件夹
func ZipDir(sourceDir, zipFile string) error {
	// 创建输出文件
	zipfile, err := os.Create(zipFile)
	if err != nil {
		return err
	}
	defer zipfile.Close()

	// 创建zip写入器
	zipWriter := zip.NewWriter(zipfile)
	defer zipWriter.Close()

	// 遍历文件夹并逐个添加文件到zip
	err = filepath.Walk(sourceDir, func(filePath string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// 获取相对路径
		relPath, err := filepath.Rel(sourceDir, filePath)
		if err != nil {
			return err
		}

		// 创建zip文件的头部信息
		header, err := zip.FileInfoHeader(info)
		if err != nil {
			return err
		}

		// 设置相对路径作为文件名
		header.Name = relPath

		if info.IsDir() {
			// 如果是文件夹，添加一个目录的头部信息
			header.Name += "/"
		} else {
			// 如果是文件，设置压缩方法
			header.Method = zip.Deflate
		}

		// 创建zip文件的写入流
		writer, err := zipWriter.CreateHeader(header)
		if err != nil {
			return err
		}

		if !info.IsDir() {
			// 如果是文件，打开文件并将内容复制到zip文件
			file, err := os.Open(filePath)
			if err != nil {
				return err
			}
			defer file.Close()

			_, err = io.Copy(writer, file)
			if err != nil {
				return err
			}
		}

		return nil
	})

	return err
}
