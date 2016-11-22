
'use strict';


describe('Arena', function (){
  beforeEach(function() {
    module('packt');
  });


  describe('Mathcup Generation', function() {
      it('it should generate a matchup with an opponent and terrain', inject(function (Arena){
        var matchup = Arena.generateMatchup();
        matchup.opponent.should.exist();
        matchup.terrain.should.exist();
      }));
  });

  describe('Scoring', function(){

    beforeEach(inject(function (Animals, Terrains){

      this.rhino = Animals.find('rhino');
      this.alligator = Animals.find('alligator');
      this.swamp = Terrains.find('swamp');
    }))

    it('should calculate the combat score for an animal', inject(function(Arena){
      var combatScore =  Arena.calculateCombatScore(this.rhino);
      combatScore.should.be.gte(0).and.lte(10);
    }));

    it('should calculate the terrain influence of a terrain and animal', inject(function(Arena){
      var terrainInfluence = Arena.calculateTerrainInfluence(this.rhino, this.swamp);
      terrainInfluence.should.be.gte(0).and.lte(1);

    }));

    it('should calculate final score for an animal based on its stats and the terrain', inject(function(Arena){
      var totalScore = Arena.calculateTotalScore(this.rhino, this.swamp)
      totalScore.should.be.gte(0).and.lte(10);
    }));

  })


});
// 'use strict';
//
// describe('Arena', function () {
//
//   beforeEach(function () {
//     module('packt');
//   });
//
//   describe('Matchup generation', function () {
//     it('should generate a matchup with an opponent and a terrain', inject(function (Arena) {
//       var matchup = Arena.generateMatchup();
//       matchup.opponent.should.exist();
//       matchup.terrain.should.exist();
//     }));
//   });
//
//   describe('Scoring', function () {
//
//     beforeEach(inject(function (Animals, Terrains) {
//       this.rhino = Animals.find('rhino');
//       this.alligator = Animals.find('alligator');
//       this.swamp = Terrains.find('swamp');
//     }));
//
//     it('should calculate the combat score for an animal', inject(function (Arena) {
//       var combatScore = Arena.calculateCombatScore(this.rhino);
//       combatScore.should.be.gte(0).and.lte(10);
//     }));
//
//     it('should calculate the terrain influence of a terrain and an animal', inject(function (Arena) {
//       var terrainInfluence = Arena.calculateTerrainInfluence(this.rhino, this.swamp);
//       terrainInfluence.should.be.gte(0).and.lte(1);
//     }));
//
//     it('should calculate the final score for an animal based on its stats and the terrain', inject(function (Arena) {
//       var totalScore = Arena.calculateTotalScore(this.rhino, this.swamp);
//       totalScore.should.be.gte(0).and.lte(10);
//     }));
//   });
//
//   describe('Scoring', function () {
//
//     beforeEach(inject(function (Animals, Terrains) {
//       this.rhino = Animals.find('rhino');
//       this.alligator = Animals.find('alligator');
//       this.swamp = Terrains.find('swamp');
//     }));
//
//     it('should determine a winner if the matchup is not equal', inject(function (Arena) {
//       var outcome = Arena.determineWinner(this.alligator, this.rhino, this.swamp);
//       outcome.should.equal('player');
//     }));
//
//     it('should determine a draw if the matchup is equal', inject(function (Arena) {
//       var outcome = Arena.determineWinner(this.rhino, this.rhino, this.swamp);
//       outcome.should.equal('draw');
//
//     }));
//
//   });
//
// });
