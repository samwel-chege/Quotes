export class Quote {
   showDescription: boolean;

   constructor(public id: number, public name: string, public description: string, public createDate: Date){
       this.showDescription=false;
   }
}
