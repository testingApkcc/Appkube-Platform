import React, { useState, ChangeEvent } from 'react';
import { Button, Field, Input, useStyles2, FieldSet } from '@grafana/ui';
import { PluginConfigPageProps, AppPluginMeta, PluginMeta, GrafanaTheme2 } from '@grafana/data';
import { getBackendSrv, locationService } from '@grafana/runtime';
import { css } from '@emotion/css';
import { SecretInput } from '../SecretInput';

export type JsonData = {
  apiUrl?: string;
  isApiKeySet?: boolean;
  accessKey?: string;
  secretKey?: string;
  region?: string;
  formkiqClientUrl?: string;
  formkiqUserName?: string;
  formkiqPassword?: string;
};

type State = {
  // The URL to reach our custom API.
  apiUrl: string;
  // Tells us if the API key secret is set.
  // Set to `true` ONLY if it has already been set and haven't been changed.
  // (We unfortunately need an auxiliray variable for this, as `secureJsonData` is never exposed to the browser after it is set)
  isApiKeySet: boolean;
  // An secret key for our custom API.
  apiKey: string;
  accessKey: string;
  secretKey: string;
  region: string;
  formkiqClientUrl: string;
  formkiqUserName: string;
  formkiqPassword: string;
};

interface Props extends PluginConfigPageProps<AppPluginMeta<JsonData>> { }

export const AppConfig = ({ plugin }: Props) => {
  const s = useStyles2(getStyles);
  const { enabled, pinned, jsonData } = plugin.meta;
  const [state, setState] = useState<State>({
    apiUrl: jsonData?.apiUrl || '',
    apiKey: '',
    isApiKeySet: Boolean(jsonData?.isApiKeySet),
    accessKey: jsonData?.accessKey || '',
    secretKey: jsonData?.secretKey || '',
    region: jsonData?.region || '',
    formkiqClientUrl: jsonData?.formkiqClientUrl || '',
    formkiqUserName: jsonData?.formkiqUserName || '',
    formkiqPassword: jsonData?.formkiqPassword || '',
  });

  const onResetApiKey = () =>
    setState({
      ...state,
      apiKey: '',
      isApiKeySet: false,
    });

  const onChangeApiKey = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      apiKey: event.target.value.trim(),
    });
  };

  const onChangeApiUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      apiUrl: event.target.value.trim(),
    });
  };

  const onChangeAccessKey = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      accessKey: event.target.value.trim(),
    });
  };

  const onChangeSecretKey = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      secretKey: event.target.value.trim(),
    });
  };

  const onChangeRegion = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      region: event.target.value.trim(),
    });
  };

  const onChangeFormkiqUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      formkiqClientUrl: event.target.value.trim(),
    });
  };

  const onChangeFormkiqUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      formkiqUserName: event.target.value.trim(),
    });
  };

  const onChangeFormkiqPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      formkiqPassword: event.target.value.trim(),
    });
  };

  return (
    <div>
      {/* ENABLE / DISABLE PLUGIN */}
      <FieldSet label="Enable / Disable">
        {!enabled && (
          <>
            <div className={s.colorWeak}>The plugin is currently not enabled.</div>
            <Button
              className={s.marginTop}
              variant="primary"
              onClick={() =>
                updatePluginAndReload(plugin.meta.id, {
                  enabled: true,
                  pinned: true,
                  jsonData,
                })
              }
            >
              Enable plugin
            </Button>
          </>
        )}

        {/* Disable the plugin */}
        {enabled && (
          <>
            <div className={s.colorWeak}>The plugin is currently enabled.</div>
            <Button
              className={s.marginTop}
              variant="destructive"
              onClick={() =>
                updatePluginAndReload(plugin.meta.id, {
                  enabled: false,
                  pinned: false,
                  jsonData,
                })
              }
            >
              Disable plugin
            </Button>
          </>
        )}
      </FieldSet>

      {/* CUSTOM SETTINGS */}
      <FieldSet label="API Settings" className={s.marginTopXl}>
        {/* API Key */}
        <Field label="API Key" description="A secret key for authenticating to our custom API">
          <SecretInput
            width={60}
            data-testid="api-key"
            id="api-key"
            value={state?.apiKey}
            isConfigured={state.isApiKeySet}
            placeholder={'Your secret API key'}
            onChange={onChangeApiKey}
            onReset={onResetApiKey}
          />
        </Field>

        {/* API Url */}
        <Field label="API Url" description="" className={s.marginTop}>
          <Input
            width={60}
            id="api-url"
            data-testid="api-url"
            label={`API Url`}
            value={state?.apiUrl}
            placeholder={`E.g.: http://mywebsite.com/api/v1`}
            onChange={onChangeApiUrl}
          />
        </Field>

        <Field label="Access key" description="" className={s.marginTop}>
          <Input
            width={60}
            id="access-key"
            data-testid="access-key"
            label={`Access key`}
            value={state?.accessKey}
            onChange={onChangeAccessKey}
          />
        </Field>

        <Field label="Secret key" description="" className={s.marginTop}>
          <Input
            width={60}
            id="secret-key"
            data-testid="secret-key"
            label={`Secret key`}
            value={state?.secretKey}
            onChange={onChangeSecretKey}
          />
        </Field>

        <Field label="Region" description="" className={s.marginTop}>
          <Input
            width={60}
            id="region"
            data-testid="region"
            label={`Region`}
            value={state?.region}
            onChange={onChangeRegion}
          />
        </Field>

        <Field label="Formkiq Client URL" description="" className={s.marginTop}>
          <Input
            width={60}
            id="formkiqClientUrl"
            data-testid="formkiqClientUrl"
            label={`Formkiq Client URL`}
            value={state?.formkiqClientUrl}
            onChange={onChangeFormkiqUrl}
          />
        </Field>

        <Field label="Formkiq User Name" description="" className={s.marginTop}>
          <Input
            width={60}
            id="formkiqUserName"
            data-testid="formkiqUserName"
            label={`Formkiq User Name`}
            value={state?.formkiqUserName}
            onChange={onChangeFormkiqUserName}
          />
        </Field>

        <Field label="Formkiq Password" description="" className={s.marginTop}>
          <Input
            width={60}
            id="formkiqPassword"
            data-testid="formkiqPassword"
            label={`Formkiq Password`}
            value={state?.formkiqPassword}
            onChange={onChangeFormkiqPassword}
          />
        </Field>

        <div className={s.marginTop}>
          <Button
            type="submit"
            onClick={() =>
              updatePluginAndReload(plugin.meta.id, {
                enabled,
                pinned,
                jsonData: {
                  apiUrl: state.apiUrl,
                  isApiKeySet: true,
                  accessKey: state.accessKey,
                  secretKey: state.secretKey,
                  region: state.region,
                  formkiqClientUrl: state.formkiqClientUrl,
                  formkiqUserName: state.formkiqUserName,
                  formkiqPassword: state.formkiqPassword,
                },
                // This cannot be queried later by the frontend.
                // We don't want to override it in case it was set previously and left untouched now.
                secureJsonData: state.isApiKeySet
                  ? undefined
                  : {
                    apiKey: state.apiKey,
                  },
              })
            }
            disabled={Boolean(!state.apiUrl || (!state.isApiKeySet && !state.apiKey) || !state.accessKey || !state.secretKey || !state.region || !state.formkiqClientUrl || !state.formkiqUserName || !state.formkiqPassword)}
          >
            Save API settings
          </Button>
        </div>
      </FieldSet>
    </div>
  );
};

const getStyles = (theme: GrafanaTheme2) => ({
  colorWeak: css`
    color: ${theme.colors.text.secondary};
  `,
  marginTop: css`
    margin-top: ${theme.spacing(3)};
  `,
  marginTopXl: css`
    margin-top: ${theme.spacing(6)};
  `,
});

const updatePluginAndReload = async (pluginId: string, data: Partial<PluginMeta<JsonData>>) => {
  try {
    await updatePlugin(pluginId, data);

    // Reloading the page as the changes made here wouldn't be propagated to the actual plugin otherwise.
    // This is not ideal, however unfortunately currently there is no supported way for updating the plugin state.
    locationService.reload();
  } catch (e) {
    console.error('Error while updating the plugin', e);
  }
};

export const updatePlugin = async (pluginId: string, data: Partial<PluginMeta>) => {
  const response = await getBackendSrv().datasourceRequest({
    url: `/api/plugins/${pluginId}/settings`,
    method: 'POST',
    data,
  });

  return response?.data;
};
