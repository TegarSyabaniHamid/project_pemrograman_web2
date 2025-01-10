"use server"

import { PrismaClient } from "@prisma/client";
//deklarasi variable prisma
const prisma = new PrismaClient();

////buat fungsi (standar)
//untuk tampil data mahasiswa
export async function getData()
{
    //buat untuk ORM (veiw data)
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
        where: {
            status: "Y"
        }
    });

    return mahasiswa;

}

// buat fungsi hapus data
// (update status Y >> N)
//function setUpdateStatus()
export const setUpdateStatus = async(npm : string) =>
{
    await prisma.tb_mahasiswa.updateMany({
        where: {
            npm: npm
        },
        data: {
            status: 'N',
        },
    })
}