export class Post {

    constructor(private id: number, private title: string, private content: string, 
                private loveIts: number, private dontLoveIts: number, private createdAt: Date){ }

    increaseLoveIts(){
        this.loveIts++;
    }

    increaseDontLoveIts(){
        this.dontLoveIts++;
    }

    getLoveIts(){
        return this.loveIts;
    }

    getDontLoveIts(){
        return this.dontLoveIts;
    }

    getPostColor(){
        let itemClass = {
            'success': false,
            'danger': false
        };

        if(this.loveIts > this.dontLoveIts){
            itemClass.success = true;
            itemClass.danger = false;
        }
        else if(this.loveIts < this.dontLoveIts){
            itemClass.danger = true;
            itemClass.success = false;
        }
        return itemClass;
    }

}
