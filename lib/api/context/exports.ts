/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { logger } from "@atomist/automation-client";

export { MessageClient, Destination, SlackDestination, isSlackMessage } from "@atomist/automation-client/lib/spi/message/MessageClient";

import * as slack from "@atomist/slack-messages";

export { slack };

export { ButtonSpecification } from "@atomist/automation-client/lib/spi/message/MessageClient";

export * from "@atomist/automation-client/lib/spi/graph/GraphClient";

export {
    ProjectOperationCredentials, TokenCredentials, isTokenCredentials,
} from "@atomist/automation-client/lib/operations/common/ProjectOperationCredentials";