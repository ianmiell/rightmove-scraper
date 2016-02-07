#!/bin/bash
if [[ $1 = '' ]]
then
	echo $1
	echo postcode required
	exit 1
fi
sed -i "s/POSTCODE/$1/" /marketed.js
casperjs /marketed.js
