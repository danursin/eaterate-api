IF NOT EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[eat].[CookEvent]') AND type in (N'U'))
BEGIN

	CREATE TABLE [eat].[CookEvent] (
		[id] INT IDENTITY(1, 1),
		[cook_id] INT NOT NULL,
		[date_created] DATETIME2(0) NOT NULL DEFAULT (GETUTCDATE()),
		[probe_temp] SMALLINT NULL,
		[ambient_temp] SMALLINT NULL,
		[notes] VARCHAR(500) NULL,
		CONSTRAINT [pk_eat_CookEvent_id] PRIMARY KEY ([id])
	)

	ALTER TABLE [eat].[CookEvent] ADD CONSTRAINT [fk_eat_CookEvent_cook_id_cook_id] FOREIGN KEY ([cook_id]) REFERENCES [eat].[Cook] ([id])

END
GO
