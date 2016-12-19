class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.string :name
      t.text :description
      t.string :vidURL
      t.string :URL
      t.integer :totalDonation
      t.string :threatLevel

      t.timestamps null: false
    end
  end
end
