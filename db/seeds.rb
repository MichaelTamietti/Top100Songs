# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# song has a name, artist, album, genre, duration
 require 'ffaker'

 100.times { 
   Song.create(name: FFaker::Music.song, artist: FFaker::Music.artist, album: FFaker::Music.album, genre: FFaker::Music.genre)
}