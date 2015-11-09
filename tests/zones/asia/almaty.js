"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Almaty"] = {
	"guess" : helpers.makeTestGuess("Asia/Almaty", { offset: false, abbr: true}),

	"1924" : helpers.makeTestYear("Asia/Almaty", [
		["1924-05-01T18:52:11+00:00", "23:59:59", "LMT", -18468 / 60],
		["1924-05-01T18:52:12+00:00", "23:52:12", "ALMT", -300]
	]),

	"1930" : helpers.makeTestYear("Asia/Almaty", [
		["1930-06-20T18:59:59+00:00", "23:59:59", "ALMT", -300],
		["1930-06-20T19:00:00+00:00", "01:00:00", "ALMT", -360]
	]),

	"1981" : helpers.makeTestYear("Asia/Almaty", [
		["1981-03-31T17:59:59+00:00", "23:59:59", "ALMT", -360],
		["1981-03-31T18:00:00+00:00", "01:00:00", "ALMST", -420],
		["1981-09-30T16:59:59+00:00", "23:59:59", "ALMST", -420],
		["1981-09-30T17:00:00+00:00", "23:00:00", "ALMT", -360]
	]),

	"1982" : helpers.makeTestYear("Asia/Almaty", [
		["1982-03-31T17:59:59+00:00", "23:59:59", "ALMT", -360],
		["1982-03-31T18:00:00+00:00", "01:00:00", "ALMST", -420],
		["1982-09-30T16:59:59+00:00", "23:59:59", "ALMST", -420],
		["1982-09-30T17:00:00+00:00", "23:00:00", "ALMT", -360]
	]),

	"1983" : helpers.makeTestYear("Asia/Almaty", [
		["1983-03-31T17:59:59+00:00", "23:59:59", "ALMT", -360],
		["1983-03-31T18:00:00+00:00", "01:00:00", "ALMST", -420],
		["1983-09-30T16:59:59+00:00", "23:59:59", "ALMST", -420],
		["1983-09-30T17:00:00+00:00", "23:00:00", "ALMT", -360]
	]),

	"1984" : helpers.makeTestYear("Asia/Almaty", [
		["1984-03-31T17:59:59+00:00", "23:59:59", "ALMT", -360],
		["1984-03-31T18:00:00+00:00", "01:00:00", "ALMST", -420],
		["1984-09-29T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1984-09-29T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1985" : helpers.makeTestYear("Asia/Almaty", [
		["1985-03-30T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1985-03-30T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1985-09-28T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1985-09-28T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1986" : helpers.makeTestYear("Asia/Almaty", [
		["1986-03-29T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1986-03-29T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1986-09-27T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1986-09-27T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1987" : helpers.makeTestYear("Asia/Almaty", [
		["1987-03-28T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1987-03-28T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1987-09-26T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1987-09-26T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1988" : helpers.makeTestYear("Asia/Almaty", [
		["1988-03-26T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1988-03-26T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1988-09-24T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1988-09-24T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1989" : helpers.makeTestYear("Asia/Almaty", [
		["1989-03-25T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1989-03-25T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1989-09-23T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1989-09-23T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1990" : helpers.makeTestYear("Asia/Almaty", [
		["1990-03-24T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1990-03-24T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1990-09-29T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1990-09-29T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1992" : helpers.makeTestYear("Asia/Almaty", [
		["1992-03-28T16:59:59+00:00", "22:59:59", "ALMT", -360],
		["1992-03-28T17:00:00+00:00", "00:00:00", "ALMST", -420],
		["1992-09-26T15:59:59+00:00", "22:59:59", "ALMST", -420],
		["1992-09-26T16:00:00+00:00", "22:00:00", "ALMT", -360]
	]),

	"1993" : helpers.makeTestYear("Asia/Almaty", [
		["1993-03-27T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1993-03-27T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1993-09-25T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1993-09-25T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1994" : helpers.makeTestYear("Asia/Almaty", [
		["1994-03-26T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1994-03-26T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1994-09-24T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1994-09-24T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1995" : helpers.makeTestYear("Asia/Almaty", [
		["1995-03-25T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1995-03-25T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1995-09-23T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1995-09-23T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1996" : helpers.makeTestYear("Asia/Almaty", [
		["1996-03-30T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1996-03-30T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1996-10-26T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1996-10-26T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1997" : helpers.makeTestYear("Asia/Almaty", [
		["1997-03-29T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1997-03-29T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1997-10-25T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1997-10-25T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1998" : helpers.makeTestYear("Asia/Almaty", [
		["1998-03-28T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1998-03-28T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1998-10-24T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1998-10-24T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"1999" : helpers.makeTestYear("Asia/Almaty", [
		["1999-03-27T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["1999-03-27T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["1999-10-30T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["1999-10-30T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"2000" : helpers.makeTestYear("Asia/Almaty", [
		["2000-03-25T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["2000-03-25T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["2000-10-28T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["2000-10-28T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"2001" : helpers.makeTestYear("Asia/Almaty", [
		["2001-03-24T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["2001-03-24T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["2001-10-27T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["2001-10-27T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"2002" : helpers.makeTestYear("Asia/Almaty", [
		["2002-03-30T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["2002-03-30T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["2002-10-26T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["2002-10-26T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"2003" : helpers.makeTestYear("Asia/Almaty", [
		["2003-03-29T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["2003-03-29T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["2003-10-25T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["2003-10-25T20:00:00+00:00", "02:00:00", "ALMT", -360]
	]),

	"2004" : helpers.makeTestYear("Asia/Almaty", [
		["2004-03-27T19:59:59+00:00", "01:59:59", "ALMT", -360],
		["2004-03-27T20:00:00+00:00", "03:00:00", "ALMST", -420],
		["2004-10-30T19:59:59+00:00", "02:59:59", "ALMST", -420],
		["2004-10-30T20:00:00+00:00", "02:00:00", "ALMT", -360]
	])
};