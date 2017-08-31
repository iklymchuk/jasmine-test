describe("Player", function() {
  var Player = require('./../src/Player');
  var Song = require('./../src/Song');
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  describe("when song will be playing", function() {
      it("should be able to play a Song", function() {
          player.play(song);
          expect(player.currentlyPlayingSong).toEqual(song);
      });

      // demonstrates use of spies to intercept and test method calls
      it("tells the current song if the user has made it a favorite", function() {
          spyOn(song, 'persistFavoriteStatus');

          player.play(song);
          player.makeFavorite();

          expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
      });
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

});
