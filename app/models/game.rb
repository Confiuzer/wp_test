class Game < ApplicationRecord
  has_many_attached :images
  has_many :plays

  # This is not working for some reason... Maybe is because its multiple images mmmm...
  validate :images_present?
  validates :images, presence: true

  private

  def images_present?
    errors.add(:base, 'Please add images to start the game.') if images.empty?
  end
end
