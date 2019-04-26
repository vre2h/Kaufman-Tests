for ((i = 124, j = 6; i < 186; i += 2, j += 1))
do
  convert ./$i.jpg -crop 420x420+112+1692 ./"$j"_2.jpg
  convert ./$i.jpg -crop 420x420+592+1692 ./"$j"_3.jpg
  convert ./$i.jpg -crop 420x420+1072+1692 ./"$j"_4.jpg
  convert ./$i.jpg -crop 420x420+1556+1692 ./"$j"_5.jpg
  convert ./$i.jpg -crop 420x420+2036+1692 ./"$j"_6.jpg
  convert ./$i.jpg -crop 420x420+2516+1692 ./"$j"_7.jpg
done
