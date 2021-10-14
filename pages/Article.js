import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import FeaturedArticles from '../components/FeaturedArticles';

const articleApi = [
  {
    title: 'BATTLEFIELD 2042 Berikan Bundle Cross-Gen!',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/k-1920x1080-featured-image.jpg.adapt_.crop191x100.1200w-1068x559.jpg'},
    author: 'Ikhbal Dwiyantoro',
    tag: 'Game News',
    time: 'October 13, 2021',
    desc: 'Battlefield 2024 akhirnya segera siap untuk tunjukkan mode Hazard Zone yang direncanakan untuk hadir pada 14 Oktober pukul 22.00 WIB.\n\nhttps://youtu.be/nkMiPwL8G1w\n\nUntuk kalian yang belum terlalu...',
    key: '2021/10/13/trailer-hazard-zone-battlefield-2042',
  },
  {
    title: 'Xbox Series X Edisi Nickelodeon All Star Brawl!',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/FAokmekWQAIDYwO_1633245966128_1633246019165.png'},
    author: 'Inzoid Net',
    tag: 'Console',
    time: 'October 12, 2021',
    desc: 'Setelah sempat umumkan Xbox Series X edisi Far Cry 6, kali ini Xbox umumkan Xbox Series X edisi Nickelodeon All Star Brawl versi Spongebob...',
    key: '2021/10/12/xbox-series-x-edisi-nickelodeon',
  },
  {
    title: 'Arataki Itto dan Gorou Menjadi Bintang Utama di Genshin Impact 2.3',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/arataki-itto-header-1-150x150.jpg'},
    author: 'Martin Charis',
    tag: 'Game News',
    time: 'October 12, 2021',
    desc: 'Komunitas dari Genshin Impact kini bersiap menikmati konten dari versi 2.2 yang akan rilis pada hari Rabu, 13 Oktober 2021 nanti. Namun tidak mau menyia-nyiakan...',
    key: '2021/10/12/arataki-itto-dan-gorou-menjadi-bintang-utama-di-genshin-impact-2-3',
  },
  {
    title: 'G2 Esports Kabarkan Perombakan Roster Besar Untuk Season Depan',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/1617008330831-150x150.jpg'},
    author: 'Joshua Hadinata',
    tag: 'Esports',
    time: 'October 12, 2021',
    desc: 'Kegagalan G2 Esports menuju ke Worlds 2021 tentunya menyisakan sebuah PR besar untuk tim ini dan hal tersebut nampaknya terjawab dengan pengumuman dari Carlos...',
    key: '2021/10/12/g2-esports-kabarkan-perombakan-roster',
  },
  {
    title: 'Marvel’s Avengers Datangkan Sistem “Pay-to-Win”',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/avengersheader-150x150.jpg'},
    author: 'Aldy Wayong',
    tag: 'Game News',
    time: 'October 9, 2021',
    desc: "Seperti yang kalian baca pada judul artikel kali ini, Sehubungan dengan perilisannya Marvel's Avengers pada Xbox Game Pass. Square Enix dan juga Crystal Dynamics...",
    key: '2021/10/09/marvels-avengers-pay-to-win',
  },
  {
    title: 'EA Pertimbangkan Ganti Nama FIFA?',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/sub-1_8fab89e-150x150.jpg'},
    author: 'Aldy Wayong',
    tag: 'Game News',
    time: 'October 8, 2021',
    desc: 'EA baru-baru ini diketahui tengah mempertimbangkan untuk mengganti nama game sepak bolanya yaitu FIFA.\n\nhttps://www.youtube.com/watch?v=vLj-27T-SEQ&ab_channel=EASPORTSFIFA\n\nMelalui press release terbaru yang dirilis pada website resmi EA, Cam...',
    key: '2021/10/08/ea-pertimbangkan-ganti-nama-fifa',
  },
  {
    title: 'Honkai: Star Rail Bukti miHoYo Bisa Menjajal Turn-Based RPG!',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/March-7th-150x150.png'},
    author: 'Martin Charis',
    tag: 'Game News',
    time: 'October 8, 2021',
    desc: 'Segala popularitas yang diraih Genshin Impact hingga kini tentunya menyumbangkan sejumlah besar visibilitas masyarakat akan suatu developer game yang memulai karir sebagai pengembang mobage, yaitu miHoYo. Seakan tidak...',
    key: '2021/10/08/honkai-star-rail-bukti-mihoyo-bisa-menjajal-turn-based-rpg',
  },
  {
    title: 'BATTLEFIELD 2042 Berikan Bundle Cross-Gen!',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/k-1920x1080-featured-image.jpg.adapt_.crop191x100.1200w-150x150.jpg'},
    author: 'Aldy Wayong',
    tag: 'Game News',
    time: 'October 7, 2021',
    desc: 'EA akhirnya umumkan bundle cross-gen terbaru untuk para playe dan juga fans Battlefield 2042 yang mana akan berikan dua versi game sekaligus.\n\nhttps://www.youtube.com/watch?v=WomAGoEh-Ss&t=16s\n\nSeperti yang kita...',
    key: '2021/10/07/battlefield-2042-berikan-bundle-cross-gen',
  },
  {
    title: 'MPL Indonesia Menjadi Turnamen Paling Populer Di September 2021',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/3332939331586152771-150x150.jpg'},
    author: 'Joshua Hadinata',
    tag: 'Esports',
    time: 'October 6, 2021',
    desc: 'Salah satu liga tertinggi untuk Mobile Legends di Indonesia yaitu MPL Indonesia, kini menjadi pertandingan esports terpopuler untuk bulan September 2021 yaitu MPL ID...',
    key: '2021/10/06/mpl-indonesia-populer',
  },
  {
    title: 'Honkai: Star Rail Bukti miHoYo Bisa Menjajal Turn-Based RPG!',
    img: {uri: 'https://thelazy.media/wp-content/uploads/2021/10/March-7th-150x150.png'},
    author: 'Martin Charis',
    tag: 'Game News',
    time: 'October 8, 2021',
    desc: 'Segala popularitas yang diraih Genshin Impact hingga kini tentunya menyumbangkan sejumlah besar visibilitas masyarakat akan suatu developer game yang memulai karir sebagai pengembang mobage, yaitu miHoYo. Seakan tidak...',
    key: '2021/10/08/honkai-star-rail-bukti-mihoyo-bisa-menjajal-turn-based-rpg',
  },
];

const Article = ({ navigation }) => {
  return (
    <ScrollView>
      <FeaturedArticles data={articleApi} />
      <View>
        <Text
          style={styles.latestArticle}>
          Latest Article
        </Text>
        {articleApi.reverse().map((item, idx) => (
          <View key={idx} style={styles.container}>
            <View style={styles.articleCard}>
              <ImageBackground
                style={{ flex: 1 }}
                imageStyle={{ borderRadius: 8 }}
                resizeMode="cover"
                source={item.img}>
              </ImageBackground>
            </View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>
                {item.desc}
              </Text>
              <Text
                onPress={() => navigation.navigate('Home')}
                style={styles.button}>
                Read More
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  latestArticle: {
    marginTop: 15,
    fontWeight: '500',
    marginLeft: 16,
    fontSize: 20,
    color: '#2d283e',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  title: {
    fontSize: 16,
    color: '#2d283e',
    fontWeight: '500',
    maxWidth: '60%',
    marginTop: 10,
  },
  articleCard: {
    padding: 6,
    width: 140,
    height: 140,
    backgroundColor: '#802bd1',
    margin: 15,
    borderRadius: 10,
  },
  description: { 
    marginTop: 3, 
    maxWidth: 200, 
    color: '#564f6f' 
  },
  button: {
    color: 'white',
    backgroundColor: '#802bd1',
    width: 90,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginRight: 180,
  },
});

export default Article;