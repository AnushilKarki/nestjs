import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { TablerateService } from 'src/tablerates.service';

import { CreateTablerateDto } from 'src/create-tablerate.dto';
import { Tablerate } from 'src/tablerate.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as XLSX from 'xlsx';

@Controller('files-controller')
export class FilesControllerController {
  constructor(private readonly tablerateService: TablerateService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file,
    @Body() createtablerateDto: CreateTablerateDto,
  ) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    // dd($rows);
    // a1 and a2 is age coordinate
    let a1 = 1;
    const a2 = 0;
    //r1 and r2 are rate coordinate
    let r1 = 1;
    let r2 = 1;
    //t1 and t2 are term coordinate
    const t1 = 0;
    let t2 = 1;

    for (let i = 0; i < 45; i++) {
      for (let j = 0; j < 46; j++) {
        let { age, rate, term } = createtablerateDto;
        age = data[a1][a2];
        rate = data[r1][r2];
        term = data[t1][t2];
        const tablerate = new Tablerate();
        tablerate.age = age;
        tablerate.rate = rate;
        tablerate.term = term;
        this.tablerateService.createUser(tablerate);
        if (r2 < 45) {
          r2 += 1;
        }
        if (t2 < 45) {
          t2 += 1;
        }
      }
      a1 += 1;
      r1 += 1;
      r2 = 1;
      t2 = 1;
      // dd($r2);
    }

    console.log(data[0][1]);
    return { message: 'Data uploaded and inserted into the database' };
  }
}
