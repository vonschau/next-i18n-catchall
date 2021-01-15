import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    fs.readdir('./', (err, files) => {
        console.log(files);
    });

    res.end('OK');
};
