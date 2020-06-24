class HomeController < ApplicationController

  def index
    @games = Game.all
    @game = Game.new
  end

  def play_game
    @game = Game.find(params[:id])
  end

end