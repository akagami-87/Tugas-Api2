let data = [
	{
		id: 1,
		name: 'Yamaha',
		tipe: 'N-max',
		warna: 'hitam',
		price: 32000000,
	},
	{
		id: 2,
		name: 'honda',
		tipe: 'scoopy',
		warna: 'merah doff',
		price: 19000000,
	},
	{
		id: 3,
		name: 'daihatsu',
		tipe: 'aerox',
		warna: 'biru',
		price: 28000000,
	},
	{
		id: 4,
		name: 'suzuki',
		tipe: 'satria fu',
		warna: 'kuning',
		price: 21000000,
	},
];

// Menampilkan semua data sebagai JSON
console.log(JSON.stringify(data, null, 2));

// TODO 1 : Dapatkan semua data
console.log("Semua data dalam format tabel:");
console.table(data);

// TODO 2 : Dapatkan data dengan nama tertentu
const getDataByName = (name) => data.find(tipemotor => tipemotor.name === name);
console.log("Data dengan nama Yamaha:", getDataByName('Yamaha'));

// TODO 3 : Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => data.filter(tipemotor => tipemotor.price === price);
console.log("Data dengan harga 32.000.000:", getDataByPrice(32000000));

// TODO 4 : Dapatkan data dengan warna >= hitam
const getDataByMemory = (warna) => data.filter(tipemotor => parseInt(tipemotor.warna) >= warna);
console.log("Data dengan warna >= hitam:", getDataBywarna(hitam));