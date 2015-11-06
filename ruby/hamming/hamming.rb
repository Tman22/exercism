class Hamming
  Hamming::VERSION = 1

  def self.compute(string, string2)
    raise ArgumentError if string.length != string2.length

    array = string.chars.zip(string2.chars)

    array.count do |pair1, pair2|
      pair1 != pair2
    end
  end
end
