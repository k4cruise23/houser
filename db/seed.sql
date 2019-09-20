DROP TABLE IF EXISTS houses;

CREATE TABLE houses (
    house_id SERIAL PRIMARY KEY,
    property_name VARCHAR(20),
    address VARCHAR(50),
    city VARCHAR(20),
    state VARCHAR(20),
    zip INT
);

INSERT INTO houses (
property_name, address, city, state, zip
)
VALUES 
('Best home', '123 Cool St', 'Daniel', 'UT', 84032),
('Second best', '456 Okay St', 'Murray', 'UT', 87364),
('Third best', '789 Uncool St', 'Lehi', 'UT', 84097);

SELECT * FROM houses