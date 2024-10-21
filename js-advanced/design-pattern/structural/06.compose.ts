// 小明所在的公司内部有多个部门，每个部门下可能有不同的子部门或者员工。
// 请你设计一个组合模式来管理这些部门和员工，实现对公司组织结构的统一操作。部门和员工都具有一个通用的接口，可以获取他们的名称以及展示公司组织结构。

import { entry } from "../utils";

// 每行描述一个部门或员工的信息。部门的信息格式为 D 部门名称，员工的信息格式为 E 员工名称，其中 D 或 E 表示部门或员工。

interface IComponent {
  name: string;
  display(dept: number): void;
}

class Employer implements IComponent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(dept: number): void {
    const indent = " ".repeat(dept * 4);
    console.log(`${indent} ${this.name}`);
  }
}

class Department implements IComponent {
  name: string;
  private _children: IComponent[];

  constructor(name: string) {
    this.name = name;
    this._children = [];
  }

  add(child: IComponent) {
    this._children.push(child);
  }

  remove(child: IComponent) {
    this._children = this._children.filter((item) => item.name !== child.name);
  }

  display(dept: number): void {
    const indent = " ".repeat(dept * 4);
    console.log(`${indent} ${this.name}`);

    this._children.forEach((child) => {
      child.display(dept + 1);
    });
  }
}

class Company {
  private _department: Department;

  constructor(name: string) {
    this._department = new Department(name);
  }

  add(dept: Department) {
    this._department.add(dept);
  }

  display() {
    this._department.display(1);
  }
}

// @ts-ignore
entry(8, (...args) => {
  const company = new Company("MyCompany");
  let dept: Department;
  args.forEach((item) => {
    if (item[0] === "D") {
      dept = new Department(item[1]);
      company.add(dept);
    } else {
      dept.add(new Employer(item[1]));
    }
  });

  company.display();
})(["D", "HR"])(["E", "HRManager"])(["D", "Finance"])(["E", "AccountantA"])([
  "E",
  "AccountantB",
])(["D", "IT"])(["E", "DeveloperA"])(["E", "DeveloperB"]);
