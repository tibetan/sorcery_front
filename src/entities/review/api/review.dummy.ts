// DEV ONLY — used for MSW / local development
import { ApiReview } from "@/entities/review/model/types";
import { users } from "@/entities/user/api/user.dummy";
import { products } from "@/entities/product/api/product.dummy";

export const reviews: ApiReview[] = [
    {
        id: 1,
        user_id: 1,
        user: users[0],
        product_id: 1,
        product: products[0],
        rating: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        created_at: '2025-04-09T23:31:32.000000Z',
        updated_at: '2025-06-10T23:31:32.000000Z',
    },
    {
        id: 2,
        user_id: 2,
        user: users[1],
        product_id: 2,
        product: products[1],
        rating: 4,
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        created_at: '2025-07-09T23:31:32.000000Z',
        updated_at: '2025-07-10T23:31:32.000000Z',
    }
];
