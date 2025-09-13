export class GradeSchool {
       private db: Record<number, string[]> = {};
  roster() {
    const copy: Record<number, string[]> = {};
    for (let grade in this.db) {
      copy[+grade] = [...this.db[grade]];
    }
    return copy;
  }

  add(name: string, grade: number){
    for (let g in this.db) {
      this.db[g] = this.db[g].filter((student) => student !== name);
    }
    if (!this.db[grade]) {
      this.db[grade] = [];
    }
  if (!this.db[grade].includes(name)) {
      this.db[grade].push(name);
      this.db[grade].sort((a, b) => a.localeCompare(b));
    }
  }

  grade(grade:number) {
   return this.db[grade] ?[...this.db[grade]]:[];
  }
}
