--Create table tvshows
Create table tvshows (
	show_id integer primary key,
	times_watched float,
	"mood-good" float,
	"mood-fun" float,
	"mood-wow" float,
	"mood-sad" float,
	"mood-so-so" float,
	"mood-bad" float,
	name varchar,
	followers integer,
	runtime integer,
	network varchar,
	mean_rate float,
	poster_image varchar);

select * from tvshows;

drop table tvshows;