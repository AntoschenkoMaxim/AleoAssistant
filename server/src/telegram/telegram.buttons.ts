import { Markup } from 'telegraf';

export function actionButtons() {
  return Markup.keyboard(
    [
      Markup.button.callback(
        `🔶Blockchain: Can you explain Aleo's blockchain technology?`,
        'blockchain',
      ),
      Markup.button.callback(
        '🔶Tools: What tools and programming languages does Aleo support?',
        'tools',
      ),
      Markup.button.callback(
        '🔶Smart contracts: What are private smart contracts, and how do they operate in Aleo?',
        'contracts',
      ),
    ],
    { columns: 2 },
  );
}
