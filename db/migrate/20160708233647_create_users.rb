class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :profile_picture
      t.string :call_id, :default => SecureRandom.uuid
    end
  end
end
