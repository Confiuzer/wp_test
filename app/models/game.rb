class Game < ApplicationRecord
  has_many_attached :images
  has_one :play
end
