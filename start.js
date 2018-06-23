var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youtube = /** @class */ (function () {
    function youtube(Title, Length, Views, Publish, Likes, Dislikes, Genre, Type, Comments, License, LastComment, Nextvideo, Suggstedvideo) {
        this._Title = Title;
        this._Length = Length;
        this._Views = Views;
        this._Publish = Publish;
        this._Likes = Likes;
        this._Dislikes = Dislikes;
        this._Genre = Genre;
        this._Type = Type;
        this._Comments = Comments;
        this._License = License;
        this._LastComment = LastComment;
        this._Nextvideo = Nextvideo;
        this._Suggestedvideo = Suggstedvideo;
    }
    ;
    return youtube;
}());
var CharliePuth = /** @class */ (function (_super) {
    __extends(CharliePuth, _super);
    function CharliePuth(Title, Length, Views, Publish, Likes, Dislikes, Genre, Type, Comments, License, LastComment, Nextvideo, Suggestedvideo) {
        var _this = _super.call(this, Title, Length, Views, Publish, Likes, Dislikes, Genre, Type, Comments, License, LastComment, Nextvideo, Suggestedvideo) || this;
        _this.artist1 = function () {
            return _this._Title;
        };
        _this.artist2 = function () {
            return _this._Length;
        };
        _this.artist3 = function () {
            return _this._Views;
        };
        _this.artist4 = function () {
            return _this._Publish;
        };
        _this.artist5 = function () {
            return _this._Likes;
        };
        _this.artist6 = function () {
            return _this._Dislikes;
        };
        _this.artist7 = function () {
            return _this._Genre;
        };
        _this.artist8 = function () {
            return _this._Type;
        };
        _this.artist9 = function () {
            return _this._Comments;
        };
        _this.artist10 = function () {
            return _this._License;
        };
        _this.artist11 = function () {
            return _this._LastComment;
        };
        _this.artist12 = function () {
            return _this._Nextvideo;
        };
        _this.artist13 = function () {
            return _this._Suggestedvideo;
        };
        return _this;
    }
    return CharliePuth;
}(youtube));
var Bbkivines = /** @class */ (function (_super) {
    __extends(Bbkivines, _super);
    function Bbkivines(Title, Length, Views, Publish, Likes, Dislikes, Genre, Type, Comments, License, LastComment, Nextvideo, Suggestedvideo) {
        var _this = _super.call(this, Title, Length, Views, Publish, Likes, Dislikes, Genre, Type, Comments, License, LastComment, Nextvideo, Suggestedvideo) || this;
        _this.artist1 = function () {
            return _this._Title;
        };
        _this.artist2 = function () {
            return _this._Length;
        };
        _this.artist3 = function () {
            return _this._Views;
        };
        _this.artist4 = function () {
            return _this._Publish;
        };
        _this.artist5 = function () {
            return _this._Likes;
        };
        _this.artist6 = function () {
            return _this._Dislikes;
        };
        _this.artist7 = function () {
            return _this._Genre;
        };
        _this.artist8 = function () {
            return _this._Type;
        };
        _this.artist9 = function () {
            return _this._Comments;
        };
        _this.artist10 = function () {
            return _this._License;
        };
        _this.artist11 = function () {
            return _this._LastComment;
        };
        _this.artist12 = function () {
            return _this._Nextvideo;
        };
        _this.artist13 = function () {
            return _this._Suggestedvideo;
        };
        return _this;
    }
    return Bbkivines;
}(youtube));
var DemolitionRanch = /** @class */ (function (_super) {
    __extends(DemolitionRanch, _super);
    function DemolitionRanch(Title, Length, Views, Publish, Likes, Dislikes, Genre, Type, Comments, License, LastComment, Nextvideo, Suggestedvideo) {
        var _this = _super.call(this, Title, Length, Views, Publish, Likes, Dislikes, Genre, Type, Comments, License, LastComment, Nextvideo, Suggestedvideo) || this;
        _this.artist1 = function () {
            return _this._Title;
        };
        _this.artist2 = function () {
            return _this._Length;
        };
        _this.artist3 = function () {
            return _this._Views;
        };
        _this.artist4 = function () {
            return _this._Publish;
        };
        _this.artist5 = function () {
            return _this._Likes;
        };
        _this.artist6 = function () {
            return _this._Dislikes;
        };
        _this.artist7 = function () {
            return _this._Genre;
        };
        _this.artist8 = function () {
            return _this._Type;
        };
        _this.artist9 = function () {
            return _this._Comments;
        };
        _this.artist10 = function () {
            return _this._License;
        };
        _this.artist11 = function () {
            return _this._LastComment;
        };
        _this.artist12 = function () {
            return _this._Nextvideo;
        };
        _this.artist13 = function () {
            return _this._Suggestedvideo;
        };
        return _this;
    }
    return DemolitionRanch;
}(youtube));
var First = new CharliePuth("How Long", 3.27, 392104382, "19th oct 2017", 2600000, 74000, "Music", "Music Video", 121734, "WMG", "I'am addicted to this song", "Bebe Rexa-I am a mess.");
var call = console.log('Title-' + First.artist1());
console.log('Length-' + First.artist2());
console.log('Views-' + First.artist3());
console.log('Publish-' + First.artist4());
console.log('Likes-' + First.artist5());
console.log('Dislikes-' + First.artist6());
console.log('Genre-' + First.artist7());
console.log('Types-' + First.artist8());
console.log('comments-' + First.artist9());
console.log('License-' + First.artist10());
console.log('last Comment-' + First.artist11());
console.log('Next video-' + First.artist12());
console.log("\n");
var sec = new Bbkivines("Alvida dost", 11.32, 1100000, "4th june 2018", 72000, 2000, "Drama", "General video", 12000, "Standard youtube", "Faddu hai bhai", "Bb ki vines-Angry master ji part-11");
var cal = console.log('Title-' + sec.artist1());
console.log('Length-' + sec.artist2());
console.log('Views-' + sec.artist3());
console.log('Publish-' + sec.artist4());
console.log('Likes-' + sec.artist5());
console.log('Dislikes-' + sec.artist6());
console.log('Genre-' + sec.artist7());
console.log('Types-' + sec.artist8());
console.log('comments-' + sec.artist9());
console.log('License-' + sec.artist10());
console.log('last Comment-' + sec.artist11());
console.log('Next video-' + sec.artist12());
console.log("\n");
var third = new DemolitionRanch("The Quiestest sniper rifle ever", 12.51, 10526654, "22nd dec 2017", 139000, 4100, "Sports", "General Video", 11986, "Standard youtube", "I got to have this", "Demolition Ranch-How powerful is a crossbow");
var call3 = console.log('Title-' + third.artist1());
console.log('Length-' + third.artist2());
console.log('Views-' + third.artist3());
console.log('Publish-' + third.artist4());
console.log('Likes-' + third.artist5());
console.log('Dislikes-' + third.artist6());
console.log('Genre-' + third.artist7());
console.log('Types-' + third.artist8());
console.log('comments-' + third.artist9());
console.log('License-' + third.artist10());
console.log('last Comment-' + third.artist11());
console.log('Next video-' + third.artist12());
console.log("\n");
