IF NOT EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[eat].[Unit]') AND type in (N'U'))
BEGIN

	CREATE TABLE [eat].[Unit] (
		[id] TINYINT NOT NULL IDENTITY(1, 1),
		[title] VARCHAR(25) NOT NULL,
		[abbreviation] VARCHAR(5) NOT NULL,
		CONSTRAINT [pk_eat_Unit_id] PRIMARY KEY ([id])
	)

	INSERT INTO [eat].[Unit] ([title], [abbreviation]) VALUES
		('teaspoon', 'tsp'),
		('tablespoon', 'tbsp'),
		('fluid ounce', 'fl oz'),
		('cup', 'c'),
		('pint', 'pt'),
		('quart', 'qt'),
		('gallon', 'gal'),
		('milliliter', 'ml'),
		('liter', 'l'),
		('pound', 'lb'),
		('ounce', 'oz'),
		('milligram', 'mg'),
		('gram', 'g'),
		('kilogram', 'kg')

END
GO
