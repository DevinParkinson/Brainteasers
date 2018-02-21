def input
  puts "What word would you like to check?"
  @word = gets.strip.downcase
  @word.scan(/[aeiou]/).count
end

input
