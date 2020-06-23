class AddPlayIdToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :play_id, :integer
  end
end
