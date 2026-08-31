import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

export default function App() {
  const [search, setSearch] = useState('');
  const categories = ["All Shops", "Grocery", "Fashion", "Electronics", "Food", "Pharmacy"];
  const [activeCat, setActiveCat] = useState("All Shops");
  
  const shops = [
    { id:1, name:"Fresh Mart", cat:"Grocery", rating:"4.8", time:"10 min", color:"#E8F5E9" },
    { id:2, name:"Urban Styles", cat:"Fashion", rating:"4.6", time:"15 min", color:"#F3E5F5" },
    { id:3, name:"Tech Hub", cat:"Electronics", rating:"4.9", time:"20 min", color:"#E3F2FD" },
    { id:4, name:"Spice Kitchen", cat:"Food", rating:"4.7", time:"12 min", color:"#FFF3E0" },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={styles.logoBox}><Text style={styles.logoText}>S</Text></View>
            <View>
              <Text style={styles.brand}>SEMP</Text>
              <Text style={styles.tagline}>ONE PLACE. EVERY SHOP.</Text>
            </View>
          </View>
          <View style={styles.avatar}><Text>😎</Text></View>
        </View>

        <View style={styles.searchWrap}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput 
              placeholder="Search shops, products..." 
              placeholderTextColor="#5F6368"
              style={styles.input}
              value={search}
              onChangeText={setSearch}
            />
            <View style={styles.micBox}><Text>🎤</Text></View>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsWrap} contentContainerStyle={{paddingHorizontal:20}}>
          {categories.map(c => (
            <TouchableOpacity key={c} onPress={()=>setActiveCat(c)} style={[styles.chip, activeCat===c && styles.chipActive]}>
              <Text style={[styles.chipText, activeCat===c && styles.chipTextActive]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.banner}>
          <View style={{flex:1}}>
            <Text style={styles.bannerTitle}>50% OFF</Text>
            <Text style={styles.bannerSub}>On your first order from any shop nearby</Text>
            <TouchableOpacity style={styles.bannerBtn}><Text style={styles.bannerBtnText}>Order Now</Text></TouchableOpacity>
          </View>
          <Text style={{fontSize:50}}>🛍️</Text>
        </View>

        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>Nearby Shops</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.grid}>
          {shops.map(shop => (
            <TouchableOpacity key={shop.id} style={styles.card}>
              <View style={[styles.cardTop, {backgroundColor:shop.color}]}>
                <Text style={{fontSize:32}}>{shop.cat==="Grocery"?"🛒":shop.cat==="Fashion"?"👕":shop.cat==="Electronics"?"📱":"🍔"}</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text style={styles.shopName}>{shop.name}</Text>
                <Text style={styles.shopCat}>{shop.cat} • {shop.time}</Text>
                <View style={styles.ratingRow}>
                  <Text style={styles.star}>★</Text>
                  <Text style={styles.rating}>{shop.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{height:100}} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}><Text style={styles.navIconActive}>⌂</Text><Text style={styles.navTextActive}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>♡</Text><Text style={styles.navText}>Favs</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>◧</Text><Text style={styles.navText}>Cart</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>☰</Text><Text style={styles.navText}>Menu</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:{flex:1, backgroundColor:'#fff'},
  container:{flex:1, backgroundColor:'#fff'},
  header:{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:20, paddingTop:10},
  logoBox:{width:36, height:36, borderRadius:10, backgroundColor:'#1A73E8', justifyContent:'center', alignItems:'center', marginRight:10},
  logoText:{color:'#fff', fontWeight:'800', fontSize:18},
  brand:{fontSize:16, fontWeight:'800', color:'#202124', letterSpacing:1},
  tagline:{fontSize:9, fontWeight:'600', color:'#5F6368', letterSpacing:0.8},
  avatar:{width:36, height:36, borderRadius:18, backgroundColor:'#F1F3F4', justifyContent:'center', alignItems:'center'},
  searchWrap:{paddingHorizontal:20, marginTop:4},
  searchBar:{flexDirection:'row', alignItems:'center', backgroundColor:'#F1F3F4', borderRadius:28, paddingHorizontal:16, height:52},
  searchIcon:{fontSize:16, marginRight:8},
  input:{flex:1, fontSize:15, color:'#202124'},
  micBox:{width:32, height:32, borderRadius:16, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'},
  chipsWrap:{marginTop:16},
  chip:{paddingHorizontal:16, paddingVertical:8, borderRadius:20, backgroundColor:'#F1F3F4', marginRight:8, borderWidth:1, borderColor:'#E8EAED'},
  chipActive:{backgroundColor:'#1A73E8', borderColor:'#1A73E8'},
  chipText:{fontSize:13, fontWeight:'500', color:'#5F6368'},
  chipTextActive:{color:'#fff'},
  banner:{margin:20, backgroundColor:'#E8F0FE', borderRadius:20, padding:20, flexDirection:'row', alignItems:'center'},
  bannerTitle:{fontSize:22, fontWeight:'800', color:'#1A73E8'},
  bannerSub:{fontSize:12, color:'#5F6368', marginTop:4, lineHeight:16},
  bannerBtn:{marginTop:12, backgroundColor:'#1A73E8', alignSelf:'flex-start', paddingHorizontal:16, paddingVertical:8, borderRadius:20},
  bannerBtnText:{color:'#fff', fontSize:12, fontWeight:'600'},
  sectionHead:{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20, marginTop:8, marginBottom:12},
  sectionTitle:{fontSize:16, fontWeight:'700', color:'#202124'},
  seeAll:{fontSize:13, color:'#1A73E8', fontWeight:'600'},
  grid:{flexDirection:'row', flexWrap:'wrap', paddingHorizontal:14, justifyContent:'space-between'},
  card:{width:'48%', backgroundColor:'#fff', borderRadius:16, borderWidth:1, borderColor:'#E8EAED', marginBottom:12, overflow:'hidden'},
  cardTop:{height:80, justifyContent:'center', alignItems:'center'},
  cardBottom:{padding:10},
  shopName:{fontSize:13, fontWeight:'700', color:'#202124'},
  shopCat:{fontSize:11, color:'#5F6368', marginTop:2},
  ratingRow:{flexDirection:'row', alignItems:'center', marginTop:6},
  star:{color:'#FBBC05', fontSize:12},
  rating:{fontSize:11, fontWeight:'600', color:'#202124', marginLeft:2},
  bottomNav:{flexDirection:'row', justifyContent:'space-around', paddingVertical:10, backgroundColor:'#fff', borderTopWidth:1, borderColor:'#E8EAED', position:'absolute', bottom:0, left:0, right:0},
  navItem:{alignItems:'center', paddingHorizontal:16},
  navItemActive:{alignItems:'center', paddingHorizontal:16, backgroundColor:'#E8F0FE', borderRadius:20, paddingVertical:4},
  navIcon:{fontSize:18, color:'#5F6368'},
  navIconActive:{fontSize:18, color:'#1A73E8'},
  navText:{fontSize:10, color:'#5F6368', marginTop:2},
  navTextActive:{fontSize:10, color:'#1A73E8', marginTop:2, fontWeight:'600'},
});