class Complement
  Complement::VERSION = 2
  def self.of_dna(strand)
      strand.chars.map do |letter|
      case letter
      when 'C' then 'G'
      when 'G' then 'C'
      when 'T' then 'A'
      when 'A' then 'U'
      else raise ArgumentError
      end
    end.join
  end

  def self.of_rna(strand)
    strand.chars.map do |letter|
      case letter
      when 'C' then 'G'
      when 'G' then 'C'
      when 'U' then 'A'
      when 'A' then 'T'
      else raise ArgumentError
      end
    end.join
  end
end
