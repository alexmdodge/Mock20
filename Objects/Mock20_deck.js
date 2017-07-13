class Mock20_deck extends Mock20_object{
  constructor(_id, input){
    var data = {
      _id: "",
      _type: "deck",
      name: "",
      _currentDeck: "",
      _currentIndex: -1,
      _currentCardShown: true,
      showplayers: true,
      playerscandraw: true,
      avatar: "",
      shown: false,
      players_seenumcards: true,
      players_seefrontofcards: false,
      gm_seenumcards: true,
      gm_seefrontofcards: false,
      infinitecards: false,
      _cardSequencer: -1,
      cardsplayed: "faceup",
      defaultheight: "",
      defaultwidth: "",
      discardpilemode: "none",
      _discardPile: ""
    }
    super(_id, input, data);
  }
}
