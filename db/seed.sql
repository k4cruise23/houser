DROP TABLE IF EXISTS houses;

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    address VARCHAR(50),
    city VARCHAR(20),
    state VARCHAR(20),
    zip INT,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

INSERT INTO houses (
name, address, city, state, zip, img, mortgage, rent
)
VALUES 
('Best home', '123 Cool St', 'Daniel', 'UT', 84032, 'best home img', 1, 1),
('Second best', '456 Okay St', 'Murray', 'UT', 87364, 'second best img', 2, 2),
('Third best', '789 Uncool St', 'Lehi', 'UT', 84097, 'third best img', 3, 3);

SELECT * FROM houses