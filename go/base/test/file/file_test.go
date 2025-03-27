package file

import "testing"

func TestZipDir(t *testing.T) {
	ZipDir("/Users/htfeng/Desktop/rpa-test/redis",
		"/Users/htfeng/Desktop/result.zip")
}

func TestCopyDir(t *testing.T) {
	type args struct {
		source      string
		destination string
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		{
			name: "test1",
			args: args{
				source:      "/Users/htfeng/workspace/rpa-operation-center/deploy/sql",
				destination: "/Users/htfeng/workspace/build/services/console/deploy/db2/scripts",
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := CopyDir(tt.args.source, tt.args.destination); (err != nil) != tt.wantErr {
				t.Errorf("CopyDir() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
