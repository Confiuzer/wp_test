class ChangePlayIdToPlayIds < ActiveRecord::Migration[6.0]
  def change
    rename_column :games, :play_id, :play_ids
  end
end
