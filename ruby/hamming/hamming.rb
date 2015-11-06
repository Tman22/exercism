class Hamming
  Hamming::VERSION = 1

  def self.compute(string, string2)
    raise ArgumentError if string.length != string2.length

    counter = 0
    array = string.chars.zip(string2.chars)

    array.map do |pair1, pair2|
      counter += 1 if pair1 != pair2
    end
    counter
  end
end
