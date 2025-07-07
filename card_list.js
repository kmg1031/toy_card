// card_list.js
export const CardList = {
   base: {
    // 상호 작용 후 공통 처리
    interactionEnd: ({ message, source, target }) => {
      console.log(message);
      source.x = target.x + target.w + 10;
      source.y = target.y;
    }
  },
  player: {
    type: 'player',
    name: '플레이어',
    hp: 100,
    mp: 50,
    color: '#ffe0e0',
    interaction : {
      'road': {
        type: 'action',
        name: '탐색',
        description: '길을 건설합니다.',
        pool: ['wood', 'stone'],
        run: ({ createCard, getSpawnPos, spawnCount, alert, source, target }) => {
          const pool = ['wood', 'stone'];
          const rand = pool[Math.floor(Math.random() * pool.length)];
          const { x, y } = getSpawnPos();
          spawnCount();
          createCard(rand, x, y);
          // 상호작용 종료 후 메시지
          console.log(`탐색 성공! ${rand} 카드 생성됨.`);
          // 상호작용 종료 후 카드 위치 조정
          source.x = target.x + target.w + 10;
          source.y = target.y;
        }
      },
    },
  },
  wood: {
    type: 'wood',
    name: '나무',
    color: '#d2b48c'
  },
  코코넛: {
    type: 'wood',
    name: '나무',
    color: '#d2b48c'
  },
  stone: {
    type: 'stone',
    name: '돌',
    color: '#aaaaaa'
  },
  road: {
    type: 'road',
    name: '길',
    color: '#e0f7ff',
  }
};
