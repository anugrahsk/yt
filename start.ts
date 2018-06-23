class youtube {

    _Title:string;
    _Length:number;
    _Views:number;
    _Publish:string;
    _Likes:number;
    _Dislikes:number;
    _Genre:string;
    _Type:string;
    _License:string;
    _Comments:number;
    _LastComment:string;
    _Nextvideo:string;
    _Suggestedvideo:string;

;
    constructor( Title:string, Length:number,Views:number,Publish:string,Likes:number,Dislikes:number,Genre:string,Type:string,Comments:number,License:string,LastComment:string,Nextvideo:string,Suggstedvideo:string) {
        
    
       this._Title=Title;
       this._Length=Length;
       this._Views=Views;
       this._Publish=Publish;
       this._Likes=Likes;
       this._Dislikes=Dislikes;
       this._Genre=Genre;
       this._Type=Type;
       this._Comments=Comments;
       this._License=License;
       this._LastComment=LastComment;
       this._Nextvideo=Nextvideo;
       this._Suggestedvideo=Suggstedvideo;
    }

}

class CharliePuth extends youtube{
    constructor( Title:string, Length:number,Views:number,Publish:string,Likes:number,Dislikes:number,Genre:string,Type:string,Comments:number,License:string,LastComment:string,Nextvideo:string,Suggestedvideo?:any){
        super(Title,Length,Views,Publish,Likes,Dislikes,Genre,Type,Comments,License,LastComment,Nextvideo,Suggestedvideo);
    }

    artist1=()=>{
        return this._Title;   
     }
    artist2=()=>{
        return this._Length;
    }
    artist3=()=>{
        return this._Views;
        
    }
    artist4=()=>{
        return this._Publish;
    }
    artist5=()=>{
        return this._Likes;
    }
    artist6=()=>{
        return this._Dislikes;
        
    }
    artist7=()=>{
        return this._Genre;
    }
    artist8=()=>{
        return this._Type;
    }
    artist9=()=>{
        return this._Comments;
    }
    artist10=()=>{
        return this._License;
    }
    artist11=()=>{
        return this._LastComment;
    }
    artist12=()=>{
        return this._Nextvideo;
    }
    artist13=()=>{
        return this._Suggestedvideo;
    }
    
}

class Bbkivines extends youtube{

    constructor( Title:string, Length:number,Views:number,Publish:string,Likes:number,Dislikes:number,Genre:string,Type:string,Comments:number,License:string,LastComment:string,Nextvideo:string,Suggestedvideo?:any){
        super(Title,Length,Views,Publish,Likes,Dislikes,Genre,Type,Comments,License,LastComment,Nextvideo,Suggestedvideo);
    }

    artist1=()=>{
        return this._Title;   
     }
    artist2=()=>{
        return this._Length;
    }
    artist3=()=>{
        return this._Views;
        
    }
    artist4=()=>{
        return this._Publish;
    }
    artist5=()=>{
        return this._Likes;
    }
    artist6=()=>{
        return this._Dislikes;
        
    }
    artist7=()=>{
        return this._Genre;
    }
    artist8=()=>{
        return this._Type;
    }
    artist9=()=>{
        return this._Comments;
    }
    artist10=()=>{
        return this._License;
    }
    artist11=()=>{
        return this._LastComment;
    }
    artist12=()=>{
        return this._Nextvideo;
    }
    artist13=()=>{
        return this._Suggestedvideo;
    }
}

class DemolitionRanch extends youtube{

    constructor( Title:string, Length:number,Views:number,Publish:string,Likes:number,Dislikes:number,Genre:string,Type:string,Comments:number,License:string,LastComment:string,Nextvideo:string,Suggestedvideo?:any){
        super(Title,Length,Views,Publish,Likes,Dislikes,Genre,Type,Comments,License,LastComment,Nextvideo,Suggestedvideo);
    }

    artist1=()=>{
        return this._Title;   
     }
    artist2=()=>{
        return this._Length;
    }
    artist3=()=>{
        return this._Views;
        
    }
    artist4=()=>{
        return this._Publish;
    }
    artist5=()=>{
        return this._Likes;
    }
    artist6=()=>{
        return this._Dislikes;
        
    }
    artist7=()=>{
        return this._Genre;
    }
    artist8=()=>{
        return this._Type;
    }
    artist9=()=>{
        return this._Comments;
    }
    artist10=()=>{
        return this._License;
    }
    artist11=()=>{
        return this._LastComment;
    }
    artist12=()=>{
        return this._Nextvideo;
    }
    artist13=()=>{
        return this._Suggestedvideo;
    }
}
 
let First = new CharliePuth("How Long",3.27,392104382,"19th oct 2017",2600000,74000,"Music","Music Video",121734,"WMG","I'am addicted to this song","Bebe Rexa-I am a mess.");
let call=console.log('Title-'+First.artist1()); console.log('Length-'+First.artist2()); console.log('Views-'+First.artist3()); console.log('Publish-'+First.artist4()); console.log('Likes-'+First.artist5()); console.log('Dislikes-'+First.artist6()); console.log('Genre-'+First.artist7()); console.log('Types-'+First.artist8()); console.log('comments-'+First.artist9()); console.log('License-'+First.artist10());console.log('last Comment-'+First.artist11()); console.log('Next video-'+First.artist12()); console.log("\n");

let sec = new Bbkivines("Alvida dost",11.32,1100000,"4th june 2018",72000,2000,"Drama","General video",12000,"Standard youtube","Faddu hai bhai","Bb ki vines-Angry master ji part-11");
let cal = console.log('Title-'+sec.artist1()); console.log('Length-'+sec.artist2()); console.log('Views-'+sec.artist3()); console.log('Publish-'+sec.artist4()); console.log('Likes-'+sec.artist5()); console.log('Dislikes-'+sec.artist6()); console.log('Genre-'+sec.artist7()); console.log('Types-'+sec.artist8()); console.log('comments-'+sec.artist9()); console.log('License-'+sec.artist10());console.log('last Comment-'+sec.artist11()); console.log('Next video-'+sec.artist12()); console.log("\n");

let third=new DemolitionRanch("The Quiestest sniper rifle ever",12.51,10526654,"22nd dec 2017",139000,4100,"Sports","General Video",11986,"Standard youtube","I got to have this","Demolition Ranch-How powerful is a crossbow");
let call3=console.log('Title-'+third.artist1()); console.log('Length-'+third.artist2()); console.log('Views-'+third.artist3()); console.log('Publish-'+third.artist4()); console.log('Likes-'+third.artist5()); console.log('Dislikes-'+third.artist6()); console.log('Genre-'+third.artist7()); console.log('Types-'+third.artist8()); console.log('comments-'+third.artist9()); console.log('License-'+third.artist10());console.log('last Comment-'+third.artist11()); console.log('Next video-'+third.artist12()); console.log("\n");