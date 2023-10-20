interface Mahasiswa {
    id: string;
    nama: string;
    nim: string;
}

interface KHS {
    id: string
    mahasiswa: Mahasiswa;
    nilai: string;
}

interface Jurusan {
    id: string;
    nama: string;
}

export const mahasiswaData: Mahasiswa[] = [
    {
        id: '1',
        nama: 'John Doe',
        nim: '123456',
    },
    {
        id: '2',
        nama: 'Jane Smith',
        nim: '789012',
    },
    // Add more sample data as needed
];

export const khsData: KHS[] = [
    {
        id: '1',
        mahasiswa: mahasiswaData[1],
        nilai: 'A',
    },
    {
        id: '2',
        mahasiswa: mahasiswaData[2],
        nilai: 'B',
    },
    // Add more sample data as needed
];

export const jurusanData: Jurusan[] = [
    { id: '1', nama: 'Teknik Informatika' },
    { id: '2', nama: 'Manajemen' },
];