import { Controller, Post, Body } from '@nestjs/common';
import { CreateTablerateDto } from './create-tablerate.dto';
import { TablerateService } from './tablerates.service';

@Controller('tablerates')
export class TablerateController {
  constructor(private readonly tableratesService: TablerateService) {}

  @Post()
  async create(@Body() createTablerateDto: CreateTablerateDto) {
    return this.tableratesService.createUser(createTablerateDto);
  }
}
