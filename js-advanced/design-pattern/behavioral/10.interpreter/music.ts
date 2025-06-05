// 我的规则是O表示音阶‘O1’表示低音阶，‘O2’表示中音阶，‘O3’表示高音阶;
// ‘P’表示休止符，‘CDEFGAB’表示‘Do-Re-Mi-Fa-So-La-Ti’:音符长度1表示一拍，2表示二拍，0.5表示半拍，0.25表示四分之一拍，以此类推.
// 注意:所有的字母和数字都要用半角空格分开。例如上海滩的歌曲第一句，‘浪奔’，可以写成‘O 2 E 0.5 G 0.5 A 3’表示中音开始，演奏的是mi so la。​”

interface IExpress {
  interpreter(content: string): string;
}

const LevelMap = {
  O1: "低音",
  O2: "中音",
  O3: "高音",
};

const BeatMap = {
  "3": "三拍",
  "2": "二拍",
  "1": "一拍",
  "0.5": "半拍",
  "0.25": "四分之一拍",
};

const NoteMap = {
  C: "Do",
  D: "Re",
  E: "Mi",
  F: "Fa",
  G: "So",
  A: "La",
  B: "Ti",
};

type LevelMapKey = keyof typeof LevelMap;
type BeatMapKey = keyof typeof BeatMap;
type NoteMapKey = keyof typeof NoteMap;

class MusicLevel implements IExpress {
  interpreter(content: LevelMapKey) {
    return LevelMap[content];
  }
}

class MusicBeat implements IExpress {
  interpreter(content: BeatMapKey): string {
    return BeatMap[content];
  }
}

class MusicNote implements IExpress {
  interpreter(content: NoteMapKey): string {
    return NoteMap[content];
  }
}

class Context {
  musicLevel = new MusicLevel();
  musicBeat = new MusicBeat();
  musicNote = new MusicNote();
  rst: string[][] = [];

  interpreter(content: string) {
    this.rst = [];
    let path: string[] = [];
    let preStr = "";
    // const cA = content.split(" ")
    // cA.forEach((element) => {
    content.split(" ").forEach((element) => {
      if (isNaN(Number(element))) {
        if (element === "O") {
          preStr = element;
          path = [];
          this.rst.push(path);
        } else {
          path.push(this.musicNote.interpreter(element as NoteMapKey));
        }
      } else {
        if (preStr) {
          const curStr = (preStr + element) as LevelMapKey;
          path.push(this.musicLevel.interpreter(curStr));
          preStr = "";
        } else {
          // path.push(this.musicBeat.interpreter(element as BeatMapKey));
        }
      }
    });

    return this;
  }

  executor() {
    this.rst.forEach((path) => {
      let line = "";
      path.forEach((ele) => {
        line += ele + " ";
      });
      console.log(line);
    });
  }
}

class Player {
  context = new Context();
  play(content: string) {
    this.context.interpreter(content).executor();
  }
}

const player = new Player();
player.play("O 2 E 0.5 G 0.5 A 3 O 2 E 0.5 G 0.5 A 3");
