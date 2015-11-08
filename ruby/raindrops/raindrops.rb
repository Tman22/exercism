class Raindrops
  VERSION = 1
    Drops = { 3 => 'Pling',
              5 => 'Plang',
              7 => 'Plong' }
  def self.convert(num)
    new_array = Drops.keys.reduce([]) do |array, key|
      num % key == 0 ? array << Drops[key] : array
    end
    new_array.any? ? new_array.join : num.to_s
  end
end
