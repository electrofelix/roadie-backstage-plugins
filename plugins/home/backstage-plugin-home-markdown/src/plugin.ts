/*
 * Copyright 2021 Larder Software Limited
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

import { createCardExtension } from '@backstage/plugin-home';
import { createPlugin } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

/** @public */
export const markdownPlugin = createPlugin({
  id: 'markdown',
  routes: {
    root: rootRouteRef,
  },
});

/**
 * A component to render a predefined markdown file from github.
 *
 * @public
 */
export const HomePageMarkdown = markdownPlugin.provide(
  createCardExtension<{
    owner: string;
    repo: string;
    path: string;
    branch?: string;
    purgeHtmlComments?: boolean;
  }>({
    name: 'HomePageMarkdown',
    title: 'Markdown',
    components: () => import('./MarkdownCard'),
  }),
);
