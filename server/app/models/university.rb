class University < ApplicationRecord
    has_many :courses

    enum :institution_type, { state_university: 0, private_institution: 1 }
end
