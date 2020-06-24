class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy, :random_images]

  # GET /games
  # GET /games.json
  def index
    @games = Game.all
  end

  # GET /games/1
  # GET /games/1.json
  def show
  end

  # GET /games/random_images/1
  def random_images
    @images = @game.images.limit(10).order("RANDOM()")
    @images = @images.map { |image| url_for image }

    render json: @images
  end

  # POST /games
  # POST /games.json
  def create
    @game = Game.new(game_params)

    respond_to do |format|
      if @game.save
        format.html { redirect_to play_game_path(id: @game.id), notice: 'Game ready to play.' }
      else
        format.html { redirect_to root_path }
      end
    end
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    @game.destroy
    respond_to do |format|
      format.html { redirect_to games_url, notice: 'Game was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def game_params
      params.require(:game).permit(:play_id, images: [])
    end
end
