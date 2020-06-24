class PlaysController < ApplicationController
  before_action :set_play, only: [:show, :edit, :update, :destroy]

  # GET /plays/1
  # GET /plays/1.json
  def show
  end

 # POST /plays
  # POST /plays.json
  def create
    @play = Play.new(play_params)

    respond_to do |format|
      if @play.save
        format.json { render :show, status: :created, location: @play }
      else
        format.json { render json: @play.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_play
      @play = Play.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def play_params
      params.require(:play).permit(:tick, :image_url, :game_id)
    end
end
