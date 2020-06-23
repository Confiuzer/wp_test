class PlaysController < ApplicationController
  before_action :set_play, only: [:show, :edit, :update, :destroy]

  # GET /plays/1
  # GET /plays/1.json
  def show
  end

  # PATCH/PUT /plays/1
  # PATCH/PUT /plays/1.json
  def update
    respond_to do |format|
      if @play.update(play_params)
        format.json { render :show, status: :ok, location: @play }
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
