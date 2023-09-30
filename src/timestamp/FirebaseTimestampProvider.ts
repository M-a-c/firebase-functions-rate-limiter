import { Timestamp } from 'firebase-admin/firestore';

import { TimestampProvider } from "./TimestampProvider";

export class FirebaseTimestampProvider implements TimestampProvider {
    public getTimestamp(): number {
        return Timestamp.now().toMillis();
    }
}
