IF NOT EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[eat].[Cook]') AND type in (N'U'))
BEGIN

	CREATE TABLE [eat].[Cook] (
		[id] INT IDENTITY(1, 1),
		[dish_id] INT NOT NULL,
		[title] VARCHAR(255) NULL,
		[recipe] VARCHAR(5000) NOT NULL,
		[date_created] DATETIME2(0) NOT NULL DEFAULT (GETUTCDATE()),
		CONSTRAINT [pk_eat_Cook_id] PRIMARY KEY ([id])
	)

	ALTER TABLE [eat].[Cook] ADD CONSTRAINT [fk_eat_Cook_dish_id_dish_id] FOREIGN KEY ([dish_id]) REFERENCES [eat].[Dish] ([id])

END
GO
