class HomeController < ApplicationController

  def index
    @games = Game.all
    @game = Game.new
  end

  def start_game
  end

end