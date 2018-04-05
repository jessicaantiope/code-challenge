constant = 'abcdefghijklmnopqrstuvwxyz'
@constantArray = constant.split('')

def decipher(encryptedText, cipher) 
  cipherArray = cipher.split('')
  result = encryptedText.split('').map do |character|
    if @constantArray.include?(character)
      index = cipherArray.index(character)
      @constantArray[index]
    else 
      character
    end
  end 
  result.join('')
end

solution = decipher('knlfgnb, sj koqj o yvnewju', 'oephjizkxdawubnytvfglqsrcm')

puts "the solution to the problem is: #{solution}" 